# ApiSharedObjectb380109328

## Example Usage

```typescript
import { ApiSharedObjectb380109328 } from "lapyme/models";

let value: ApiSharedObjectb380109328 = {
  object: "statement",
  id: "425b4def-5f64-492a-ac75-1b9431954f0b",
  bankAccountId: "217845d1-f8ce-4561-a3ea-4e2b6a461493",
  periodStart: new Date("2024-02-10"),
  periodEnd: new Date("2026-12-29"),
  openingBalance: 328853,
  closingBalance: 72378,
  currency: "USD",
  source: "pdf",
  createdAt: new Date("2025-08-28T03:10:16.915Z"),
  updatedAt: new Date("2024-01-02T21:17:35.999Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"statement"*                                                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bankAccountId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `periodStart`                                                                                 | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `periodEnd`                                                                                   | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `openingBalance`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closingBalance`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [models.ApiSharedEnume25b952d29](../models/api-shared-enume25b952d29.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |