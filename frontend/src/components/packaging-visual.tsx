export function PackagingVisual({ variant = 'hero' }: {
    variant?: string;
}) { return <div className={`packaging visual-${variant}`} aria-hidden="true"><div className="grid-lines"/><div className="orbit"/><div className="box box-back"><span /></div><div className="box box-front"><span /><i /></div><div className="box box-side"><span /></div>{variant === 'hero' && <><span className="visual-label label-top">● DISEÑADO PARA PROTEGER</span><span className="visual-label label-bottom">MATERIAL · ESTRUCTURA · FUNCIÓN</span><span className="crosshair">+</span></>}</div>; }
