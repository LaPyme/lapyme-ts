# ApiCashSource

## Example Usage

```typescript
import { ApiCashSource } from "lapyme/models";

let value: ApiCashSource = {
  object: "cash_source",
  id: "5085b800-944a-407a-9f0f-03aa082a38c2",
  type: "safe",
  name: "<value>",
  currency: "PES",
  warehouseId: "6bd8a746-36a5-4622-ba3f-6e35d66730ed",
  warehouseName: "<value>",
  defaultPointOfSaleId: "df27d60e-6ac3-4518-b4a8-96700191d759",
  defaultPointOfSaleName: "<value>",
  isActive: true,
  createdAt: new Date("2024-06-19T05:46:11.914Z"),
  updatedAt: new Date("2026-12-02T13:15:13.306Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"cash_source"*                                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.ApiCashSourceType](../models/api-cash-source-type.md)                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiCashSourceCurrency](../models/api-cash-source-currency.md)                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultPointOfSaleId`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultPointOfSaleName`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |