export function generateIndexArray(len) {
  const n = Math.max(0, Math.floor(Number(len) || 0));
  return Array.from({ length: n }, (_, i) => i);
}

export function makeSumMatrix(rows, cols) {
  return new Promise((resolve) => {
    const nR = Math.max(0, Math.floor(Number(rows) || 0));
    const nC = Math.max(0, Math.floor(Number(cols) || 0));
    const mat = Array.from({ length: nR }, (_, r) =>
      Array.from({ length: nC }, (_, c) => r + c)
    );
    setTimeout(() => resolve(mat), 0);
  });
}

export function makeProductMatrix(rows, cols) {
  return new Promise((resolve) => {
    const nR = Math.max(0, Math.floor(Number(rows) || 0));
    const nC = Math.max(0, Math.floor(Number(cols) || 0));
    const mat = Array.from({ length: nR }, (_, r) =>
      Array.from({ length: nC }, (_, c) => r * c)
    );
    setTimeout(() => resolve(mat), 0);
  });
}
