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
  importDocumentRole: "customs_dispatch_reversal",
  importSourcePurchaseId: "7abbff3d-142a-478a-8e1b-925596c73439",
  importNationalizationStatus: "pending_nationalization",
  customsDispatchNumber: null,
  warehouseId: "5c3e8991-6934-4b63-b306-6ac7285832fc",
  productsReceived: true,
  updateProductVariantCost: false,
  currency: "DOL",
  exchangeRate: 7057.23,
  subtotal: 548070,
  taxAmount: 16680,
  total: 214005,
  discount: 280520,
  exemptAmount: 172985,
  nonTaxedAmount: 682876,
  baseAmount: 371626,
  vatPerceptionAmount: 971509,
  nationalTaxAmount: 838184,
  grossIncomeTaxAmount: 708295,
  municipalTaxAmount: null,
  internalTaxAmount: 381289,
  otherTaxAmount: null,
  notes: "<value>",
  pdfPath: "<value>",
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
| `importDocumentRole`                                                           | [models.ApiSharedEnum9e7af09974](../models/api-shared-enum9e7af09974.md)       | :heavy_check_mark:                                                             | Rol del comprobante dentro del flujo de importacion.                           |
| `importSourcePurchaseId`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | ID de la factura comercial asociada al despacho aduanero.                      |
| `importNationalizationStatus`                                                  | [models.ApiSharedEnumf0d69c3d87](../models/api-shared-enumf0d69c3d87.md)       | :heavy_check_mark:                                                             | Estado de nacionalizacion de la factura comercial de importacion.              |
| `customsDispatchNumber`                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Numero de despacho aduanero informado por el proveedor. Hasta 32 caracteres.   |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `productsReceived`                                                             | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
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
| `items`                                                                        | [models.ApiSharedObjectedd0c22535](../models/api-shared-objectedd0c22535.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |