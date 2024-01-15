import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DialogModelProps } from "./types";
import "./style.css"

  const DialogModel:React.FC<DialogModelProps> =({ header, size, children })=> {
    const [visible, setVisible] = useState(true);

    return (
        <div className="card flex justify-content-center " >
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
            <Dialog visible={visible} style={{ width: size }} onHide={() => setVisible(false)} closable={false}  modal={true}  dismissableMask={true}>
                {children}
            </Dialog>
        </div>
    );
}

export default DialogModel
