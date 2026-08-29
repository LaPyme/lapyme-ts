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
  customsDispatchNumber: "<value>",
  warehouseId: "c3e89916-934b-4633-9066-ac7285832fce",
  productsReceived: false,
  productsReturned: false,
  inventoryEffect: "return_to_supplier",
  updateProductVariantCost: true,
  currency: "DOL",
  exchangeRate: 6619.68,
  subtotal: null,
  taxAmount: 214005,
  total: 280520,
  discount: 172985,
  exemptAmount: 682876,
  nonTaxedAmount: 371626,
  baseAmount: 971509,
  vatPerceptionAmount: 838184,
  nationalTaxAmount: 708295,
  grossIncomeTaxAmount: null,
  municipalTaxAmount: 381289,
  internalTaxAmount: null,
  otherTaxAmount: 911479,
  notes: "<value>",
  pdfPath: "<value>",
  manualAccountAllocations: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  items: [],
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
| `customsDispatchNumber`                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Numero de despacho aduanero informado por el proveedor. Hasta 32 caracteres.   |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `productsReceived`                                                             | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `productsReturned`                                                             | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `inventoryEffect`                                                              | [models.ApiSharedEnumde48b709b2](../models/api-shared-enumde48b709b2.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateProductVariantCost`                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
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
| `items`                                                                        | [models.ApiSharedObjectbf19ed87b4](../models/api-shared-objectbf19ed87b4.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |