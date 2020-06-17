import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';

const Header = () => {

    return (
        <div>
            <Toolbar>
                <div className="p-toolbar-group-left">
                    <Button label="New" icon="pi pi-plus" style={{marginRight:'.25em'}} />
                    <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                    <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                    <Button label="Save" icon="pi pi-check" className="p-button-warning" />
                </div>
                <div className="p-toolbar-group-right">
                    <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </Toolbar>
        </div>
    );
}
                
export default Header;