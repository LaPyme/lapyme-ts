# NormalizedPurchase

## Example Usage

```typescript
import { NormalizedPurchase } from "lapyme/models";

let value: NormalizedPurchase = {
  supplierId: "40eae319-d31e-4ba0-b2aa-13a845844083",
  voucherType: 97490,
  supplierInvoiceNumber: "<value>",
  invoiceDate: "<value>",
  accountDate: "<value>",
  dueDate: "<value>",
  paymentTermId: "days_15",
  paymentTermDays: 949969,
  importDocumentRole: "customs_dispatch",
  importSourcePurchaseId: "bbff3d14-2a78-4ae1-8b92-5596c7343921",
  importNationalizationStatus: null,
  costTargetPurchaseId: "5c3e8991-6934-4b63-b306-6ac7285832fc",
  customsDispatchNumber: "<value>",
  warehouseId: "eb48a0e3-d432-45ae-b52f-7ddb05619e3b",
  productsReceived: true,
  productsReturned: true,
  inventoryEffect: "none",
  updateProductVariantCost: false,
  currency: "USD",
  exchangeRate: 1551.02,
  subtotal: 337448,
  taxAmount: 111584,
  total: 331547,
  discount: 909129,
  exemptAmount: 341853,
  nonTaxedAmount: 5834,
  baseAmount: 181816,
  vatPerceptionAmount: 550453,
  nationalTaxAmount: null,
  grossIncomeTaxAmount: 303719,
  municipalTaxAmount: 48778,
  internalTaxAmount: 142192,
  otherTaxAmount: 407021,
  notes: null,
  pdfPath: "<value>",
  manualAccountAllocations: {},
  items: [
    {
      productId: "852e8e62-85ce-43b9-9ccc-78cd5eda724a",
      productName: "<value>",
      sku: "<value>",
      name: "<value>",
      quantity: 6780.02,
      unitCost: 929281,
      subtotal: 136441,
      total: null,
      taxRateId: 289790,
      isExempt: false,
      isCustomsCharge: true,
      customsChargeInTaxableBase: true,
      discountPercentage: 554.13,
      purchaseOrderItemId: "810e3749-23d2-40c5-a715-e41655997040",
      vatCategory: null,
      accountId: "0df73033-13c0-4973-9622-bec2b2af6097",
      accountName: "<value>",
      costCenter1Id: "b5e7534d-8af6-44c0-980e-b14104239c66",
      costCenter1Name: "<value>",
      costCenter2Id: "2ca6100e-60b8-4fba-b43c-773307328801",
      costCenter2Name: null,
      costCenter3Id: "6e67ac5b-aec1-4a6e-bd67-9fbc7cc8cf7f",
      costCenter3Name: null,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `supplierId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `voucherType`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `supplierInvoiceNumber`                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Numero de comprobante del proveedor. Hasta 120 caracteres.                     |
| `invoiceDate`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Fecha del comprobante en formato YYYY-MM-DD.                                   |
| `accountDate`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Fecha contable de la compra en formato YYYY-MM-DD.                             |
| `dueDate`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Fecha de vencimiento en formato YYYY-MM-DD.                                    |
| `paymentTermId`                                                                | [models.ApiSharedEnumd34af90520](../models/api-shared-enumd34af90520.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentTermDays`                                                              | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `importDocumentRole`                                                           | [models.ApiSharedEnum9e7af09974](../models/api-shared-enum9e7af09974.md)       | :heavy_check_mark:                                                             | Rol del comprobante dentro del flujo de importacion.                           |
| `importSourcePurchaseId`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | ID de la factura comercial asociada al despacho aduanero.                      |
| `importNationalizationStatus`                                                  | [models.ApiSharedEnumf0d69c3d87](../models/api-shared-enumf0d69c3d87.md)       | :heavy_check_mark:                                                             | Estado de nacionalizacion de la factura comercial de importacion.              |
| `costTargetPurchaseId`                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Compra a cuyo costo suma este comprobante.                                     |
| `customsDispatchNumber`                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Numero de despacho aduanero informado por el proveedor. Hasta 32 caracteres.   |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `productsReceived`                                                             | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `productsReturned`                                                             | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `inventoryEffect`                                                              | [models.ApiSharedEnumde48b709b2](../models/api-shared-enumde48b709b2.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateProductVariantCost`                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exchangeRate`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `subtotal`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `taxAmount`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `total`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `discount`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `exemptAmount`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `nonTaxedAmount`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `baseAmount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `vatPerceptionAmount`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `nationalTaxAmount`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `grossIncomeTaxAmount`                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `municipalTaxAmount`                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `internalTaxAmount`                                                            | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `otherTaxAmount`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `notes`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pdfPath`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `manualAccountAllocations`                                                     | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObjectc647c4276b](../models/api-shared-objectc647c4276b.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |