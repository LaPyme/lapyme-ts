# ApiPurchaseDetailResponseData

## Example Usage

```typescript
import { ApiPurchaseDetailResponseData } from "lapyme/models";

let value: ApiPurchaseDetailResponseData = {
  object: "purchase",
  id: "0c720f68-d8fa-4d29-a5d1-53695ba7df6c",
  voucherType: "<value>",
  importDocumentRole: "customs_dispatch_reversal",
  importSourcePurchaseId: "3abd361e-126c-4d58-b940-b3b776b77a10",
  importNationalizationStatus: "pending_nationalization",
  customsDispatchNumber: "<value>",
  supplierInvoiceNumber: "<value>",
  invoiceDate: "<value>",
  accountDate: "<value>",
  dueDate: "<value>",
  paymentTermId: "days_30",
  vatPerceptionAmount: 957820,
  nationalTaxAmount: 627542,
  grossIncomeTaxAmount: null,
  grossIncomeTaxBreakdown: [
    {
      provinceId: 850995,
      amount: 165215,
    },
  ],
  municipalTaxAmount: 301434,
  internalTaxAmount: 93272,
  otherTaxAmount: 639303,
  subtotal: 440608,
  taxAmount: 931210,
  exemptAmount: 299306,
  total: 881287,
  balance: 876116,
  discount: 245320,
  vatBreakdown: [
    {
      taxRateId: 352048,
      baseAmount: 480345,
      taxAmount: 301690,
    },
  ],
  notes: "<value>",
  vatCategory: "leases",
  currency: "Ethiopian Birr",
  exchangeRate: "<value>",
  pdfPath: "<value>",
  createdAt: new Date("2024-06-15T19:57:27.799Z"),
  supplier: {
    id: "e6e180b3-ec2c-4654-a6fd-b526f96634ea",
    name: "<value>",
    email: "Kiara_Greenfelder@gmail.com",
    phone: "1-393-498-8231 x299",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: null,
    address: "735 Poplar Street",
    city: "Cartwrightstad",
    provinceId: "<id>",
    postalCode: "99502-7464",
    paymentTermId: "<id>",
  },
  warehouse: {
    id: "f63e462e-a330-46ca-bae9-348e3a53a6da",
    name: "<value>",
  },
  items: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"purchase"*                                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accounting`                                                                                  | [models.ApiSharedObject799d3e3f37](../models/api-shared-object799d3e3f37.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `voucherType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `importDocumentRole`                                                                          | [models.ApiSharedEnum9e7af09974](../models/api-shared-enum9e7af09974.md)                      | :heavy_check_mark:                                                                            | Rol del comprobante dentro del flujo de importacion.                                          |
| `importSourcePurchaseId`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | ID de la factura comercial asociada al despacho aduanero.                                     |
| `importNationalizationStatus`                                                                 | [models.ApiSharedEnumf0d69c3d87](../models/api-shared-enumf0d69c3d87.md)                      | :heavy_check_mark:                                                                            | Estado de nacionalizacion de la factura comercial de importacion.                             |
| `customsDispatchNumber`                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Numero de despacho aduanero informado por el proveedor. Hasta 32 caracteres.                  |
| `supplierInvoiceNumber`                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Numero de comprobante del proveedor. Hasta 120 caracteres.                                    |
| `invoiceDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Fecha del comprobante en formato YYYY-MM-DD.                                                  |
| `accountDate`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Fecha contable de la compra en formato YYYY-MM-DD.                                            |
| `dueDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Fecha de vencimiento en formato YYYY-MM-DD.                                                   |
| `paymentTermId`                                                                               | [models.ApiSharedEnumd34af90520](../models/api-shared-enumd34af90520.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vatPerceptionAmount`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nationalTaxAmount`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grossIncomeTaxAmount`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grossIncomeTaxBreakdown`                                                                     | [models.ApiSharedObject95929ea589](../models/api-shared-object95929ea589.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `municipalTaxAmount`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `internalTaxAmount`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `otherTaxAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exemptAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discount`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vatBreakdown`                                                                                | [models.ApiSharedObjectfb7405a472](../models/api-shared-objectfb7405a472.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vatCategory`                                                                                 | [models.ApiSharedEnum822a963f55](../models/api-shared-enum822a963f55.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exchangeRate`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pdfPath`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `supplier`                                                                                    | [models.ApiSharedObjecta8ecbd0557](../models/api-shared-objecta8ecbd0557.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouse`                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObjecte048f871c2](../models/api-shared-objecte048f871c2.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |