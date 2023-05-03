import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'ce-number-input',
    templateUrl: 'ce-number-input.component.html',
    styleUrls: ['./ce-number-input.component.css'],
    providers:[]
})


export class CENumberInput implements OnInit{

    @Input() placeholder: string = "";
    @Output() updateQuantityValue = new EventEmitter();
    @Input() incrementWarningTooltip: string = '';
    @Input() enableOrderlineCancelPostReleasedFF:boolean = false;
    @Input() isIncrementDisabledTooltip: string = "";
    @Input() isDecrementDisabledTooltip: string = "";
    disableIncrementButton:boolean = false;
    disableDecrementButton:boolean = false;
    disableTextField:boolean = true;
    decreaseButtonTooltip: string = '';
    private _isIncrementDisabled!: boolean;
    private _isDecrementDisabled!: boolean;
    bundle: string = ""
    _orderLineQuantity: number = 0;
    _quantity:any;
    _totalCancelEligibleQty: number = 0;

    get orderLineQuantity(): any {
        return this._orderLineQuantity;
    }

    @Input() set orderLineQuantity(value: any) {
        this._orderLineQuantity = value;
        this.onQuantityChange();
    }

    get quantity(): any {
        return this._quantity;
    }

    @Input() set quantity(value: any) {
        this._quantity = `${value}`;
        this.onQuantityChange();
    }
    get totalCancelEligibleQty(): any {
        return this._totalCancelEligibleQty;
    }

    @Input() set totalCancelEligibleQty(value: any) {
        this._totalCancelEligibleQty = value;
        this.onQuantityChange();
    }

    @Input() set isIncrementDisabled(value: boolean) {
        this._isIncrementDisabled = value;
        this.disableIncrementButton = value;
        this.disableTextField = this._isIncrementDisabled || this.isDecrementDisabled;
     }
 
     get isIncrementDisabled(): boolean {
         return this._isIncrementDisabled;
     }


     @Input() set isDecrementDisabled(value: boolean) {
         this._isDecrementDisabled = value;
         this.disableDecrementButton = value;
         this.disableTextField = this.isIncrementDisabled || this._isDecrementDisabled;
         if(this.disableDecrementButton){
             this.decreaseButtonTooltip = this.isDecrementDisabledTooltip;
         }
      }
  
      get isDecrementDisabled(): boolean {
          return this._isDecrementDisabled;
      }

    constructor(
    ){
    }

    ngOnInit(){
        this.disableTextField = this.isIncrementDisabled || this.isDecrementDisabled;
    }

    onQuantityChange(){
        if(this.quantity && this.orderLineQuantity){
            if(this.quantity < this._orderLineQuantity){
                this.disableIncrementButton = false;
            }
            if(this.totalCancelEligibleQty && this.quantity === this._orderLineQuantity - this.totalCancelEligibleQty){
                this.disableDecrementButton = true;
                // this.decreaseButtonTooltip = this.ceTranslateService.translate('Quantity_Reduce_Warning_TC', this.bundle)
            }
        }
    }

    increment(value:any)
    {
        debugger
        if(this.enableOrderlineCancelPostReleasedFF && this.isIncrementDisabled && this.totalCancelEligibleQty){
            let Qvalue = parseInt(value) + 1;
            if(Qvalue < this.orderLineQuantity){
                this.disableIncrementButton = false;
            }else{
                this.disableIncrementButton = true;
            }

            if(Qvalue > this.orderLineQuantity - this.totalCancelEligibleQty){
                this.disableDecrementButton = false;
                this.decreaseButtonTooltip = '';
            }
            this.quantity = Qvalue;
            this.updateQuantityValue.emit(this.quantity);
        }else{
        let Qvalue = parseInt(value);
        this.quantity = Qvalue + 1;
        this.updateQuantityValue.emit(this.quantity);
    }
    }

    isTextFieldDisable(){
        let isTextFieldDisable: boolean = false;
        if(this.isIncrementDisabled || this.isDecrementDisabled)
        {
            isTextFieldDisable = true;
        }
        return isTextFieldDisable;
    }

    decrement(value:any){
        if(this.enableOrderlineCancelPostReleasedFF && this._isIncrementDisabled && this.totalCancelEligibleQty){
            let Qvalue = parseInt(value) - 1 ;
            if(Qvalue >= 1){
                if(Qvalue < this.orderLineQuantity){
                    this.disableIncrementButton = false;
                    if(Qvalue == this.orderLineQuantity - this.totalCancelEligibleQty){
                        this.disableDecrementButton = true;
                        // this.decreaseButtonTooltip = this.ceTranslateService.translate('Quantity_Reduce_Warning_TC', this.bundle)
                    }
                }
                this.quantity = Qvalue;
            }
            this.updateQuantityValue.emit(this.quantity);
        }else{
        let Qvalue = parseInt(value);
        Qvalue = Qvalue - 1;
        if(Qvalue >= 1)
        {
            this.quantity = Qvalue;
        }
        this.updateQuantityValue.emit(this.quantity);
    }
    }

    updateQuantity(value:any){
        let strValue = (<string>value);
        let val = strValue.substring(strValue.indexOf('/'), strValue.length);
        this.updateQuantityValue.emit(value);
    }

    onlyNumberKey(event:any){
        return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    }
   

}
