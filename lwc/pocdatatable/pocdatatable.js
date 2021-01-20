import LightningDatatable from 'lightning/datatable';
import pocpicklist from './pocpicklist';

export default class pocdatatable extends LightningDatatable {
    static customTypes = {
        picklist: {
            template: pocpicklist
        }
    };
}
