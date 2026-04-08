import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const sourceEntries = [
  'GRA6631_2026_LecturePlan.pdf',
  'Norges Bank -- Monetary Policy Handbook.pdf',
  'Lecture 1',
  'Lecture 2',
  'Lecture 3',
  'Lecture 4',
  'Lecture 5',
  'Lecture 6',
  'Lecture 7',
  'Lecture 8',
  'Lecture 9',
  'Lecture 10',
  'Lecture 11',
  'Lecture 12',
  'Problem sets',
  'Exams',
];

const publicRoot = join(root, 'public', 'materials');
const generatedManifestPath = join(root, 'src', 'generated', 'materials-manifest.json');

function walk(relativePath) {
  const absolutePath = join(root, relativePath);
  const stats = statSync(absolutePath);

  if (stats.isDirectory()) {
    return readdirSync(absolutePath, { withFileTypes: true }).flatMap((entry) =>
      walk(join(relativePath, entry.name)),
    );
  }

  if (relativePath.toLowerCase().endsWith('.pdf')) {
    return [
      {
        relativePath: relativePath.replaceAll('\\', '/'),
        size: stats.size,
        mtimeMs: stats.mtimeMs,
      },
    ];
  }

  return [];
}

function categorize(relativePath) {
  if (relativePath.startsWith('Lecture ')) {
    return 'lecture';
  }

  if (relativePath.startsWith('Problem sets/')) {
    return 'problem-set';
  }

  if (relativePath.startsWith('Exams/')) {
    return 'exam';
  }

  return 'reference';
}

const files = sourceEntries.flatMap((entry) => {
  if (!existsSync(join(root, entry))) {
    return [];
  }

  return walk(entry);
});

mkdirSync(publicRoot, { recursive: true });
mkdirSync(dirname(generatedManifestPath), { recursive: true });

const manifest = files.map((file) => {
  const targetPath = join(publicRoot, ...file.relativePath.split('/'));
  mkdirSync(dirname(targetPath), { recursive: true });
  const sourcePath = join(root, file.relativePath);
  const shouldCopy =
    !existsSync(targetPath) ||
    statSync(targetPath).size !== file.size ||
    statSync(targetPath).mtimeMs < file.mtimeMs;

  if (shouldCopy) {
    copyFileSync(sourcePath, targetPath);
  }

  return {
    ...file,
    category: categorize(file.relativePath),
    publicPath: `/materials/${file.relativePath.split('/').map(encodeURIComponent).join('/')}`,
  };
});

writeFileSync(
  generatedManifestPath,
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      itemCount: manifest.length,
      items: manifest,
    },
    null,
    2,
  )}\n`,
);

console.log(`Synced ${manifest.length} PDF files into public/materials.`);
