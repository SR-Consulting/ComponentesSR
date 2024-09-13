import { LightningElement, api } from 'lwc';

export default class LightningSpinner extends LightningElement {
    @api spinnerText = '';
    @api size = 'medium'; // small, medium and large
    @api variant = 'brand'; // base, brand and inverse
    classType = 'medium-spinner';

    connectedCallback() {
        this.loadClassType();
    }

    get helpText() {
        return this.spinnerText ? this.spinnerText : 'Loading';
    }

    loadClassType() {
        if (this.size === 'small') {
            this.classType = 'small-spinner';
        } else if (this.size === 'medium') {
            this.classType = 'medium-spinner';
        } else if (this.size === 'large') {
            this.classType = 'large-spinner';
        }
    }
}