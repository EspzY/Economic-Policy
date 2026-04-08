import { useMemo, useState } from 'react';

type Complex = {
  re: number;
  im: number;
};

type Props = {
  beta?: number;
  sigma?: number;
  initialPhiPi?: number;
  initialPhiY?: number;
  initialKappa?: number;
};

function absComplex(value: Complex) {
  return Math.sqrt(value.re * value.re + value.im * value.im);
}

function formatNumber(value: number) {
  return Number.isFinite(value) ? value.toFixed(3) : 'n/a';
}

function formatComplex(value: Complex) {
  if (!Number.isFinite(value.re) || !Number.isFinite(value.im)) {
    return 'n/a';
  }

  if (Math.abs(value.im) < 1e-10) {
    return value.re.toFixed(3);
  }

  const sign = value.im >= 0 ? '+' : '-';
  return `${value.re.toFixed(3)} ${sign} ${Math.abs(value.im).toFixed(3)}i`;
}

function eigenvalues2x2(a11: number, a12: number, a21: number, a22: number): [Complex, Complex] {
  const trace = a11 + a22;
  const det = a11 * a22 - a12 * a21;
  const discriminant = trace * trace - 4 * det;

  if (discriminant >= 0) {
    const root = Math.sqrt(discriminant);
    return [
      { re: (trace + root) / 2, im: 0 },
      { re: (trace - root) / 2, im: 0 },
    ];
  }

  const imag = Math.sqrt(-discriminant) / 2;
  return [
    { re: trace / 2, im: imag },
    { re: trace / 2, im: -imag },
  ];
}

export default function TaylorPrincipleExplorer({
  beta = 0.99,
  sigma = 1,
  initialPhiPi = 1.5,
  initialPhiY = 0.1,
  initialKappa = 0.1,
}: Props) {
  const [phiPi, setPhiPi] = useState(initialPhiPi);
  const [phiY, setPhiY] = useState(initialPhiY);
  const [kappa, setKappa] = useState(initialKappa);

  const computed = useMemo(() => {
    const denominator = sigma + phiY + kappa * phiPi;
    const omega = 1 / denominator;

    const a11 = omega * sigma;
    const a12 = omega * (1 - beta * phiPi);
    const a21 = omega * (sigma * kappa);
    const a22 = omega * (kappa + beta * (sigma + phiY));

    const [eig1, eig2] = eigenvalues2x2(a11, a12, a21, a22);
    const abs1 = absComplex(eig1);
    const abs2 = absComplex(eig2);

    const taylorCondition = kappa * (phiPi - 1) + (1 - beta) * phiY;
    const bkSatisfied = abs1 < 1 && abs2 < 1;

    return {
      denominator,
      a11,
      a12,
      a21,
      a22,
      eig1,
      eig2,
      abs1,
      abs2,
      taylorCondition,
      bkSatisfied,
    };
  }, [beta, sigma, phiPi, phiY, kappa]);

  const plot = useMemo(() => {
    const width = 520;
    const height = 140;
    const points = 61;
    const xMax = 3;

    const xs = Array.from({ length: points }, (_, index) => (index / (points - 1)) * xMax);
    const ys = xs.map((x) => kappa * (x - 1) + (1 - beta) * phiY);

    let yMin = Math.min(...ys, 0);
    let yMax = Math.max(...ys, 0);

    if (Math.abs(yMax - yMin) < 1e-8) {
      yMin -= 1;
      yMax += 1;
    } else {
      const pad = 0.12 * (yMax - yMin);
      yMin -= pad;
      yMax += pad;
    }

    function toX(x: number) {
      return (x / xMax) * width;
    }

    function toY(y: number) {
      return height - ((y - yMin) / (yMax - yMin)) * height;
    }

    const path = ys
      .map((y, index) => `${index === 0 ? 'M' : 'L'} ${toX(xs[index]).toFixed(1)} ${toY(y).toFixed(1)}`)
      .join(' ');

    const zeroY = toY(0);
    const currentX = toX(phiPi);
    const currentY = toY(computed.taylorCondition);

    return {
      width,
      height,
      path,
      zeroY,
      currentX,
      currentY,
      yMin,
      yMax,
    };
  }, [beta, phiPi, phiY, kappa, computed.taylorCondition]);

  return (
    <section className="tp-explorer card">
      <p className="eyebrow">Interactive visual</p>
      <h3>Taylor principle + determinacy explorer</h3>
      <p className="tp-explorer-note">
        This is an illustrative calculator for the Lecture 3 matrix system. Change policy parameters and see how the
        sufficient Taylor-principle inequality and the Blanchard-Kahn-style eigenvalue check move.
      </p>

      <div className="tp-controls">
        <label className="tp-control">
          <span>Inflation response phi_pi: {phiPi.toFixed(2)}</span>
          <input
            type="range"
            min={0}
            max={3}
            step={0.05}
            value={phiPi}
            onChange={(event) => setPhiPi(Number(event.target.value))}
          />
        </label>
        <label className="tp-control">
          <span>Output-gap response phi_y: {phiY.toFixed(2)}</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={phiY}
            onChange={(event) => setPhiY(Number(event.target.value))}
          />
        </label>
        <label className="tp-control">
          <span>Phillips-curve slope kappa: {kappa.toFixed(2)}</span>
          <input
            type="range"
            min={0.02}
            max={0.6}
            step={0.01}
            value={kappa}
            onChange={(event) => setKappa(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="tp-readout">
        <div className="tp-metric">
          <p className="tp-metric-label">Sufficient condition (slides)</p>
          <p className="tp-metric-value">
            kappa(phi_pi - 1) + (1 - beta)phi_y = <strong>{formatNumber(computed.taylorCondition)}</strong>
          </p>
          <p className={`tp-status ${computed.taylorCondition > 0 ? 'ok' : 'bad'}`}>
            {computed.taylorCondition > 0 ? "Positive: supports uniqueness in the lecture's rule family." : 'Non-positive: indeterminacy is likely.'}
          </p>
        </div>

        <div className="tp-metric">
          <p className="tp-metric-label">Eigenvalue check (slides)</p>
          <p className="tp-metric-value">
            lambda1 = {formatComplex(computed.eig1)} (|lambda1| = {formatNumber(computed.abs1)})
          </p>
          <p className="tp-metric-value">
            lambda2 = {formatComplex(computed.eig2)} (|lambda2| = {formatNumber(computed.abs2)})
          </p>
          <p className={`tp-status ${computed.bkSatisfied ? 'ok' : 'bad'}`}>
            {computed.bkSatisfied ? 'Both |lambda| < 1: bounded equilibrium is supported.' : 'At least one |lambda| >= 1: determinacy fails in this calibration.'}
          </p>
        </div>
      </div>

      <figure className="tp-plot">
        <figcaption>
          How the sufficient inequality changes with phi_pi (holding beta={beta}, phi_y={phiY.toFixed(2)}, kappa={kappa.toFixed(2)})
        </figcaption>
        <svg viewBox={`0 0 ${plot.width} ${plot.height}`} role="img" aria-label="Plot of Taylor principle inequality as a function of inflation response">
          <path className="tp-plot-axis" d={`M 0 ${plot.zeroY.toFixed(1)} L ${plot.width} ${plot.zeroY.toFixed(1)}`} />
          <path className="tp-plot-line" d={plot.path} />
          <circle className="tp-plot-dot" cx={plot.currentX} cy={plot.currentY} r="5.5" />
        </svg>
      </figure>

      <p className="tp-explorer-footnote">
        Notes: This tool is meant for intuition, not calibration. The core exam skill is explaining the logic: policy must
        respond strongly enough to inflation so that higher inflation expectations raise, not lower, the real rate.
      </p>
    </section>
  );
}
