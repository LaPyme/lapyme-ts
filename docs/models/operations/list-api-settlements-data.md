# ListApiSettlementsData

## Example Usage

```typescript
import { ListApiSettlementsData } from "lapyme/models/operations";

let value: ListApiSettlementsData = {
  object: "settlement",
  id: "4610508c-d0ba-4a9b-a1ea-61f5dd12fd5b",
  bankAccountId: "2d3332fa-7a80-4777-b339-c9fad8e032f9",
  settlementDate: new Date("2026-04-06"),
  status: "<value>",
  grossAmount: 615803,
  deductionsAmount: 824106,
  netAmount: 796655,
  createdAt: new Date("2024-04-22T09:58:52.586Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"settlement"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bankAccountId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `settlementDate`                                                                              | [Date](../../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grossAmount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deductionsAmount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `netAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |