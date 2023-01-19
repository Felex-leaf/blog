export type IAllTexture = Record<string, THREE.Texture>;

export interface IMesh<T> extends THREE.Object3D {
  material?: T;
}
