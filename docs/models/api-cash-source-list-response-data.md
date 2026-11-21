# ApiCashSourceListResponseData

## Example Usage

```typescript
import { ApiCashSourceListResponseData } from "lapyme/models";

let value: ApiCashSourceListResponseData = {
  object: "cash_source",
  id: "340ac4fb-65e5-468b-9f92-e89514618661",
  type: "register",
  name: "<value>",
  currency: "ARS",
  warehouseId: "69b40992-c084-4d45-b070-fddbf5ad7fed",
  warehouseName: "<value>",
  defaultPointOfSaleId: "ec159da6-8a8d-46ae-a851-a3cae37e3d01",
  defaultPointOfSaleName: "<value>",
  isActive: false,
  createdAt: new Date("2026-09-09T17:10:39.413Z"),
  updatedAt: new Date("2024-08-13T21:42:48.169Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"cash_source"*                                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.ApiSharedEnum1579b1abf3](../models/api-shared-enum1579b1abf3.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultPointOfSaleId`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultPointOfSaleName`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |