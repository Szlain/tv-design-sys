import './fuse.module.css';

/* eslint-disable-next-line */
export interface FuseReactProps {}

export function JsxButton(props: FuseReactProps) {
  return (
    <button>Welcome to FuseReact! Wow it's so cool</button>
  );
}
export function DummyElem(props: FuseReactProps) {
  return (
    <button>Dummy Elem that should be treeshaken!</button>
  );
}


