export class OrderExtension2 
{   
    UpdatedTimestamp : any;
    OrderExtension2Id : any;
    OrgId : string="";
    CreatedTimestamp : any;
    Extended : Extended=new Extended();

}

class Extended {
    TransactionId : string ="";
    Ordernumber : string="";
    FraudValidationStatus : any;
    FraudStatus : any;
    IsActive : any;
    CreatedDate : any;
    CreatedBy : any;
    LastUpdateDate : any;
    FraudRequestDate : any;
    OrganizationId : string="";
    RetryCount : any;
}
