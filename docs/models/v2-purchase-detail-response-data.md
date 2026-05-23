# V2PurchaseDetailResponseData

## Example Usage

```typescript
import { V2PurchaseDetailResponseData } from "lapyme/models";

let value: V2PurchaseDetailResponseData = {
  id: "b82e553c-ffb7-4ae9-893b-5b4f4d4480f3",
  voucherType: "<value>",
  importDocumentRole: "despacho",
  importSourcePurchaseId: null,
  importNationalizationStatus: "partially_nationalized",
  despachoNumber: "<value>",
  supplierInvoiceNumber: "<value>",
  invoiceDate: "<value>",
  accountDate: "<value>",
  dueDate: "<value>",
  paymentTermId: "days_30_60",
  percepIVA: 315257,
  nacionales: 810625,
  iibb: 265901,
  iibbBreakdown: [],
  municipales: 965173,
  internos: 637337,
  otros: 543281,
  subtotal: 165201,
  taxAmount: 878550,
  exemptAmount: 238027,
  total: 856352,
  balance: 338593,
  discount: 758075,
  ivaBreakdown: [],
  notes: "<value>",
  rubroIva: "bienes_de_uso",
  currency: "Manat",
  exchangeRate: "<value>",
  pdfPath: "<value>",
  createdAt: new Date("2025-06-16T10:23:45.224Z"),
  supplier: {
    id: "81864525-6e4a-48b4-96f7-c0b01031a71b",
    name: "<value>",
    email: "Kyle.Bailey96@hotmail.com",
    phone: null,
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    address: "7085 Bramble Close",
    city: "Yadiramouth",
    provinceId: "<id>",
    postalCode: null,
    paymentTermId: "<id>",
  },
  warehouse: null,
  items: [
    {
      id: "e2f2c741-2254-4f53-ba77-e96f10d126dd",
      name: "<value>",
      quantity: 2361.66,
      unitCost: 393730,
      subtotal: 313950,
      taxRateId: 656421,
      isExempt: true,
      total: 659442,
      discountPercentage: 393.74,
      purchaseOrderItemId: "3488c853-7114-4c6d-b62e-6444a6bc6e1b",
      rubroIva: "locaciones",
      product: {
        id: "97eec961-72f7-45ff-aee5-405760104275",
        sku: "<value>",
        name: null,
        productType: "combo",
      },
      purchaseOrder: {
        id: "5429734a-964a-4a62-90aa-c6b6daef9e91",
        formattedOrderNumber: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `voucherType`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `importDocumentRole`                                                                                                                 | [models.V2PurchaseDetailResponseImportDocumentRole](../models/v2-purchase-detail-response-import-document-role.md)                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `importSourcePurchaseId`                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `importNationalizationStatus`                                                                                                        | [models.V2PurchaseDetailResponseImportNationalizationStatus](../models/v2-purchase-detail-response-import-nationalization-status.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `despachoNumber`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `supplierInvoiceNumber`                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `invoiceDate`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `accountDate`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `dueDate`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `paymentTermId`                                                                                                                      | [models.V2PurchaseDetailResponsePaymentTermId](../models/v2-purchase-detail-response-payment-term-id.md)                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `percepIVA`                                                                                                                          | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `nacionales`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `iibb`                                                                                                                               | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `iibbBreakdown`                                                                                                                      | [models.V2PurchaseDetailResponseIibbBreakdown](../models/v2-purchase-detail-response-iibb-breakdown.md)[]                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `municipales`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `internos`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `otros`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `subtotal`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `taxAmount`                                                                                                                          | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `exemptAmount`                                                                                                                       | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `total`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `balance`                                                                                                                            | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `discount`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `ivaBreakdown`                                                                                                                       | [models.V2PurchaseDetailResponseIvaBreakdown](../models/v2-purchase-detail-response-iva-breakdown.md)[]                              | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `notes`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `rubroIva`                                                                                                                           | [models.V2PurchaseDetailResponseRubroIva](../models/v2-purchase-detail-response-rubro-iva.md)                                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `currency`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `exchangeRate`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `pdfPath`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `supplier`                                                                                                                           | [models.V2PurchaseDetailResponseSupplier](../models/v2-purchase-detail-response-supplier.md)                                         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `warehouse`                                                                                                                          | [models.V2PurchaseDetailResponseWarehouse](../models/v2-purchase-detail-response-warehouse.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `items`                                                                                                                              | [models.V2PurchaseDetailResponseItem](../models/v2-purchase-detail-response-item.md)[]                                               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |