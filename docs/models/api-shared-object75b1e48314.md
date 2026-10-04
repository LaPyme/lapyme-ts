# ApiSharedObject75b1e48314

## Example Usage

```typescript
import { ApiSharedObject75b1e48314 } from "lapyme/models";

let value: ApiSharedObject75b1e48314 = {
  origin: "advance",
  originLabel: "<value>",
  sourceType: "<value>",
  sourceId: "<id>",
  reference: "<value>",
  documentNumber: "<value>",
  voucherType: "<value>",
  documentDate: new Date("2024-05-03"),
  dueDate: new Date("2024-07-31"),
  sourceCurrency: "<value>",
  functionalBalance: 770516,
  daysOverdue: null,
  bucket: "1_30",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `origin`                                                                          | [models.ApiSharedEnum5a50422bbd](../models/api-shared-enum5a50422bbd.md)          | :heavy_check_mark:                                                                | N/A                                                                               |
| `originLabel`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `sourceType`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `sourceId`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `reference`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `documentNumber`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `voucherType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `documentDate`                                                                    | [Date](../types/rfcdate.md)                                                       | :heavy_check_mark:                                                                | N/A                                                                               |
| `dueDate`                                                                         | [Date](../types/rfcdate.md)                                                       | :heavy_check_mark:                                                                | N/A                                                                               |
| `sourceCurrency`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | Moneda del comprobante.                                                           |
| `functionalBalance`                                                               | *number*                                                                          | :heavy_check_mark:                                                                | Saldo en `functional_currency` (pesos), aunque el comprobante sea en otra moneda. |
| `daysOverdue`                                                                     | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `bucket`                                                                          | [models.ApiSharedEnumc325e8c877](../models/api-shared-enumc325e8c877.md)          | :heavy_check_mark:                                                                | N/A                                                                               |