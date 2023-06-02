export interface Order {
    Actions?:                    Actions;
    PK?:                         null;
    CreatedBy?:                  string;
    CreatedTimestamp?:           Date;
    UpdatedBy?:                  string;
    UpdatedTimestamp?:           Date;
    Messages?:                   null;
    OrgId?:                      string;
    OrderId?:                    string;
    CustomerId?:                 string;
    CustomerFirstName?:          string;
    CustomerLastName?:           string;
    CustomerPhone?:              string;
    CustomerEmail?:              string;
    CustomerTypeId?:             null;
    AlternateOrderId?:           null;
    SellingLocationId?:          null;
    Priority?:                   null;
    IsOnHold?:                   boolean;
    IsConfirmed?:                boolean;
    IsCapturedOffline?:          boolean;
    IsCancelled?:                boolean;
    CancelComments?:             null;
    CapturedDate?:               Date;
    IsTaxExempt?:                boolean;
    TaxExemptId?:                null;
    TaxExemptComments?:          null;
    CurrencyCode?:               string;
    IsReadyForTender?:           boolean;
    ConfirmedDate?:              null;
    IsTaxOverridden?:            boolean;
    TotalCharges?:               number;
    TotalDiscounts?:             number;
    TotalTaxes?:                 null;
    TaxOverrideValue?:           null;
    TaxOverridePercValue?:       null;
    OrderSubTotal?:              number;
    OrderTotal?:                 number;
    ConfirmedOrderTotal?:        null;
    IsPostVoided?:               boolean;
    ParentReservationRequestId?: null;
    NextEventTime?:              null;
    ArchiveDate?:                null;
    StoreSaleCount?:             number;
    OrderLineCount?:             number;
    StoreReturnCount?:           number;
    ReturnLineCount?:            number;
    CancelLineCount?:            number;
    PackageCount?:               null;
    ReturnLabelEmail?:           string;
    BusinessDate?:               null;
    IsArchiveInProgress?:        boolean;
    IsUnArchiveInProgress?:      boolean;
    MinReturnStatusId?:          string;
    MaxReturnStatusId?:          string;
    MinFulfillmentStatusId?:     null;
    MaxFulfillmentStatusId?:     null;
    SuspendedOrderId?:           null;
    DoNotReleaseBefore?:         null;
    ProcessReturnComments?:      null;
    MerchSaleLineCount?:         number;
    MerchReturnLineCount?:       number;
    CancelledOrderSubTotal?:     null;
    CancelledTotalDiscounts?:    null;
    EventSubmitTime?:            null;
    IsOrderCountable?:           boolean;
    CountedDate?:                null;
    CancelledOrderTotal?:        null;
    CustomerAddress?:            null;
    LoyaltyNumber?:              string;
    CustomerSignature?:          null;
    RunId?:                      null;
    OrderLocale?:                null;
    OrderToken?:                 string;
    OrderExtension1?:            null;
    OrderExtension2?:            any[];
    OrderExtension3?:            any[];
    OrderExtension4?:            any[];
    OrderExtension5?:            any[];
    OrderCaptureConfig?:         OrderCaptureConfig;
    OrderLine?:                  OrderLine[];
    TransactionReference?:       any[];
    OrderChargeDetail?:          OrderChargeDetail[];
    OrderTaxDetail?:             any[];
    OrderAttribute?:             any[];
    OrderCaptureDetail?:         any[];
    OrderPaymentMethod?:         any[];
    ContactPreference?:          any[];
    CustomerIdentityDoc?:        any[];
    OrderSalesAssociate?:        any[];
    OrderNote?:                  any[];
    OrderHold?:                  any[];
    OrderUpdatedBy?:             OrderUpdatedBy[];
    Release?:                    any[];
    OrderTagDetail?:             any[];
    OrderPromisingInfo?:         null;
    Invoice?:                    any[];
    OrderType?:                  OrderType;
    DocType?:                    DocType;
    SellingChannel?:             SellingChannel;
    CancelReason?:               null;
    TaxOverrideReason?:          null;
    TaxExemptReason?:            null;
    PostVoidReason?:             null;
    PaymentStatus?:              PaymentStatus;
    RefundRecipient?:            RefundRecipient;
    PublishStatus?:              null;
    ProcessInfo?:                null;
    OrderMilestone?:             any[];
    OrderMilestoneEvent?:        any[];
    OrderPromotionRequest?:      any[];
    ProcessReturnReason?:        null;
    ReturnTrackingDetail?:       any[];
    ReturnLabel?:                any[];
    RefundPaymentMethod?:        null;
    TaxOverrideType?:            null;
    OrderTrackingInfo?:          any[];
    SuggestedPromo?:             any[];
    ManagerAuthDetail?:          any[];
    CustomerCommPref?:           any[];
    SelfServiceAttribute?:       null;
    BouncebackCouponDetail?:     any[];
    FulfillmentStatus?:          string;
    ReturnStatus?:               string;
    BalanceDue?:                 number;
    CollectedAmount?:            number;
    ReturnTotalWithoutFees?:     number;
    TotalInformationalTaxes?:    number;
    TotalReturnFees?:            number;
    CalculatedValues?:           OrderCalculatedValues;
    CustomerPhoneCountryId?:     null;
    CustomerPhoneWithoutPrefix?: null;
    MaxAppeasementAmount?:       number;
    Extended?:                   Actions;
}

export interface Actions {
}

export interface OrderCalculatedValues {
    TotalCoupons?:            number;
    TotalPromotions?:         number;
    TotalInstructionNotes?:   number;
    ItemSubTotal?:            number;
    OtherCharges?:            number;
    TotalCommunicationNotes?: number;
    TotalShippingCharges?:    number;
    TotalDiscounts?:          number;
}

export interface DocType {
    DocTypeId?: string;
}

export interface OrderCaptureConfig {
    Actions?:               Actions;
    PK?:                    string;
    CreatedBy?:             string;
    CreatedTimestamp?:      Date;
    UpdatedBy?:             string;
    UpdatedTimestamp?:      Date;
    Messages?:              null;
    OrgId?:                 string;
    InvoiceTaxModeId?:      string;
    ReturnInvoiceTaxMode?:  string;
    TaxComparisonStrategy?: string;
    TrackDelivery?:         boolean;
    Extended?:              Actions;
}

export interface OrderChargeDetail {
    Actions?:                 Actions;
    PK?:                      string;
    CreatedBy?:               string;
    CreatedTimestamp?:        Date;
    UpdatedBy?:               string;
    UpdatedTimestamp?:        Date;
    Messages?:                null;
    OrgId?:                   string;
    ChargeDetailId?:          string;
    TaxCode?:                 string;
    ChargeDisplayName?:       string;
    ChargeTotal?:             number;
    ChargePercent?:           null;
    IsTaxIncluded?:           boolean;
    IsOverridden?:            boolean;
    OriginalChargeAmount?:    number;
    Comments?:                null;
    IsInformational?:         boolean;
    IsProrated?:              boolean;
    FulfillmentGroupId?:      null;
    IsOrderDiscount?:         boolean;
    ChargeReferenceId?:       string;
    ChargeReferenceDetailId?: null;
    RelatedChargeDetailId?:   null;
    RelatedChargeType?:       null;
    RequestedAmount?:         null;
    IsReturnCharge?:          boolean;
    ChargeSequence?:          number;
    ParentChargeDetailId?:    null;
    IsProratedAtSameLevel?:   boolean;
    IsPostReturn?:            boolean;
    ChargeType?:              ChargeType;
    Reason?:                  null;
    DiscountOn?:              null;
    ChargeSubType?:           null;
    TaxableAmount?:           null;
    Extended?:                Actions;
    UnitCharge?:              null;
    HeaderChargeDetailId?:    string;
    IsLineDiscount?:          boolean;
    RelatedOrderLineId?:      null;
    IsCopied?:                boolean;
    IsCopiedHeaderCharge?:    boolean;
}

export interface ChargeType {
    ChargeTypeId?: string;
}

export interface OrderLine {
    Actions?:                       Actions;
    PK?:                            string;
    CreatedBy?:                     string;
    CreatedTimestamp?:              Date;
    UpdatedBy?:                     string;
    UpdatedTimestamp?:              Date;
    Messages?:                      null;
    OrgId?:                         string;
    OrderLineId?:                   string;
    AlternateOrderLineId?:          null;
    ItemId?:                        string;
    Quantity?:                      number;
    UnitPrice?:                     number;
    MinFulfillmentStatusId?:        string;
    MaxFulfillmentStatusId?:        string;
    Priority?:                      null;
    IsItemNotOnFile?:               boolean;
    IsReturnable?:                  boolean;
    IsReturnableAtStore?:           boolean;
    IsExchangeable?:                boolean;
    IsGift?:                        boolean;
    IsRefundGiftCard?:              boolean;
    IsOnHold?:                      boolean;
    IsPreOrder?:                    boolean;
    IsPreSale?:                     boolean;
    StreetDate?:                    null;
    IsCancelled?:                   boolean;
    CancelComments?:                null;
    ParentOrderLineId?:             string;
    PaymentGroupId?:                null;
    TotalTaxes?:                    null;
    TotalCharges?:                  number;
    TotalDiscounts?:                number;
    OrderLineSubTotal?:             number;
    OrderLineTotal?:                number;
    ItemStyle?:                     string;
    ItemBrand?:                     string;
    ItemSize?:                      string;
    ItemColorDescription?:          string;
    ItemSeason?:                    null;
    ItemDescription?:               string;
    ItemShortDescription?:          string;
    SmallImageURI?:                 string;
    GiftCardValue?:                 null;
    RefundPrice?:                   null;
    OriginalUnitPrice?:             number;
    IsTaxIncluded?:                 boolean;
    IsTaxOverridden?:               boolean;
    TaxOverrideValue?:              null;
    TaxOverridePercValue?:          null;
    IsPriceOverridden?:             boolean;
    DoNotShipBeforeDate?:           null;
    IsPackAndHold?:                 boolean;
    RequestedDeliveryDate?:         null;
    PromisedDeliveryDate?:          null;
    LatestDeliveryDate?:            null;
    DeliveryMethodSubType?:         null;
    CarrierCode?:                   null;
    ServiceLevelCode?:              null;
    EffectiveRank?:                 string;
    AddressId?:                     null;
    ShipFromAddressId?:             string;
    ShipToLocationId?:              string;
    FulfillmentGroupId?:            string;
    ReleaseGroupId?:                null;
    ShippingMethodId?:              string;
    IsPerishable?:                  boolean;
    IsReturn?:                      boolean;
    SellingLocationId?:             null;
    ParentOrderId?:                 string;
    PhysicalOriginId?:              string;
    ItemTaxCode?:                   null;
    VolumetricWeight?:              null;
    VolumetricWeightUOM?:           null;
    ProductClass?:                  string;
    IsEvenExchange?:                boolean;
    IsReceiptExpected?:             boolean;
    IsGiftCard?:                    boolean;
    IsNonMerchandise?:              boolean;
    OrderId?:                       string;
    IsHazmat?:                      boolean;
    CancelledOrderLineSubTotal?:    null;
    CancelledTotalDiscounts?:       null;
    ItemDepartmentNumber?:          null;
    ItemDeptNumber?:                null;
    ItemDepartmentName?:            null;
    ItemBarcode?:                   null;
    IsItemTaxExemptable?:           boolean;
    IsActivationRequired?:          boolean;
    ItemMaxDiscountPercentage?:     null;
    ItemMaxDiscountAmount?:         null;
    BusinessDate?:                  null;
    TransactionReferenceId?:        null;
    TotalDiscountOnItem?:           number;
    ParentLineCreatedTimestamp?:    Date;
    PromisedShipDate?:              null;
    HasComponents?:                 boolean;
    AllocationConfigId?:            null;
    IsDiscountable?:                boolean;
    IsPriceOverrideable?:           boolean;
    ValueEntryRequired?:            boolean;
    ItemWebURL?:                    string;
    NextEventTime?:                 null;
    LineShortCount?:                number;
    CancellationRequestStatus?:     null;
    OrderLineExtension1?:           null;
    OrderLineExtension2?:           any[];
    OrderLineExtension3?:           any[];
    OrderLineExtension4?:           any[];
    OrderLineExtension5?:           any[];
    OrderLineTaxDetail?:            any[];
    OrderLineChargeDetail?:         OrderChargeDetail[];
    OrderLineVASInstructions?:      any[];
    OrderLinePromisingInfo?:        null;
    OrderLineAdditional?:           OrderLineAdditional;
    OrderLineAttribute?:            any[];
    OrderLineSalesAssociate?:       any[];
    OrderLinePickupDetail?:         any[];
    OrderLineNote?:                 any[];
    OrderLineHold?:                 any[];
    QuantityDetail?:                QuantityDetail[];
    Allocation?:                    any[];
    OrderLineTagDetail?:            any[];
    FulfillmentDetail?:             any[];
    LineType?:                      null;
    CancelReason?:                  null;
    ParentOrderLineType?:           null;
    DeliveryMethod?:                DeliveryMethod;
    LineProcessInfo?:               null;
    OrderLineMilestone?:            any[];
    OrderLineMilestoneEvent?:       any[];
    OrderLinePromotionRequest?:     any[];
    OrderLineCancelHistory?:        any[];
    ReturnType?:                    ReturnType;
    ReturnDetail?:                  any[];
    OrderLinePriceOverrideHistory?: any[];
    StoreSaleEntryMethod?:          null;
    TaxOverrideType?:               null;
    OrderLineComponents?:           any[];
    FulfillmentStatus?:             string;
    ReturnableQuantity?:            null;
    ReturnableLineTotal?:           number;
    ReturnLineTotalWithoutFees?:    number;
    CalculatedValues?:              OrderLineCalculatedValues;
    TaxableAmount?:                 null;
    TotalInformationalTaxes?:       number;
    SelfServiceUrl?:                null;
    ShortSelfServiceUrl?:           null;
    ReturnQuantity?:                number;
    QuantityType?:                  QuantityType[];
    MaxAppeasementAmount?:          number;
    ShipFromAddress?:               ShipFromAddress;
    ShipToAddress?:                 null;
    UOM?:                           string;
    IsItemTaxOverridable?:          boolean;
    Extended?:                      Actions;
}

export interface OrderLineCalculatedValues {
    RecievedQuantity?: string;
    InvoicedQuantity?: string;
    SmallImageURI?:    string;
    ItemStyle?:        string;
    Color?:            string;
    ItemSize?:         string;
    ShortDescription?: string;
}

export interface DeliveryMethod {
    DeliveryMethodId?: string;
}

export interface OrderLineAdditional {
    Actions?:                        Actions;
    PK?:                             string;
    CreatedBy?:                      string;
    CreatedTimestamp?:               Date;
    UpdatedBy?:                      string;
    UpdatedTimestamp?:               Date;
    Messages?:                       null;
    OrgId?:                          string;
    PriceOverrideComments?:          null;
    ReturnReason?:                   string;
    ReturnApprovalComments?:         null;
    IsItemVariance?:                 boolean;
    IsConditionVariance?:            boolean;
    VarianceQuantity?:               null;
    EligibleForReturnReasonComment?: null;
    ItemDisposition?:                null;
    PickupExpiryDate?:               null;
    IsMarkedForCancellation?:        boolean;
    PriorDeliveryMethod?:            null;
    PickUpExpiryDateUpdateCount?:    null;
    CapturedDate?:                   null;
    QuoteId?:                        null;
    Email?:                          null;
    FiscalAttributes?:               null;
    PurgeDate?:                      null;
    ItemCondition?:                  ItemCondition;
    PriceOverrideReason?:            null;
    TaxOverrideReason?:              null;
    ReturnApprovalReason?:           null;
    EligibleForReturnReason?:        null;
    Extended?:                       Actions;
}

export interface ItemCondition {
    ItemConditionId?: string;
}

export interface QuantityDetail {
    Actions?:           Actions;
    PK?:                string;
    CreatedBy?:         string;
    CreatedTimestamp?:  Date;
    UpdatedBy?:         string;
    UpdatedTimestamp?:  Date;
    Messages?:          null;
    OrgId?:             string;
    QuantityDetailId?:  string;
    ItemId?:            string;
    Quantity?:          number;
    StatusId?:          string;
    SubstitutionRatio?: null;
    SubstitutionType?:  null;
    Reason?:            null;
    ReasonType?:        null;
    UOM?:               string;
    Extended?:          Actions;
}

export interface QuantityType {
    QuantityTypeId?: string;
    Quantity?:       number;
    Sequence?:       number;
    Description?:    null;
}

export interface ReturnType {
    ReturnTypeId?: string;
}

export interface ShipFromAddress {
    Actions?:           Actions;
    PK?:                null;
    CreatedBy?:         null;
    CreatedTimestamp?:  null;
    UpdatedBy?:         null;
    UpdatedTimestamp?:  null;
    Messages?:          null;
    AddressId?:         string;
    IsAddressVerified?: boolean;
    AddressName?:       null;
    Address?:           Address;
    AvsReason?:         null;
    Extended?:          Actions;
}

export interface Address {
    FirstName?:  string;
    LastName?:   string;
    Address1?:   string;
    Address2?:   null;
    Address3?:   null;
    City?:       string;
    State?:      string;
    PostalCode?: string;
    County?:     null;
    Country?:    string;
    Phone?:      string;
    Email?:      null;
}

export interface OrderType {
    OrderTypeId?: string;
}

export interface OrderUpdatedBy {
    Actions?:          Actions;
    PK?:               string;
    CreatedBy?:        string;
    CreatedTimestamp?: Date;
    UpdatedBy?:        string;
    UpdatedTimestamp?: Date;
    Messages?:         null;
    OrgId?:            string;
    UpdatedByUser?:    string;
    UpdatedByDate?:    Date;
    Extended?:         Actions;
}

export interface PaymentStatus {
    StatusId?: string;
}

export interface RefundRecipient {
    RefundRecipientId?: string;
}

export interface SellingChannel {
    SellingChannelId?: string;
}
