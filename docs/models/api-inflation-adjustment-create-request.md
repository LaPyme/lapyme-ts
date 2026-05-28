# ApiInflationAdjustmentCreateRequest

## Example Usage

```typescript
import { ApiInflationAdjustmentCreateRequest } from "lapyme/models";

let value: ApiInflationAdjustmentCreateRequest = {
  occurredAt: new Date("2025-01-21"),
  lines: [
    {
      accountId: "b6321cd0-4c80-4cc5-acdc-4981e23b8a99",
      adjustmentAmount: 282546,
    },
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `occurredAt`                                                                                                  | [Date](../types/rfcdate.md)                                                                                   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `description`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `lines`                                                                                                       | [models.ApiInflationAdjustmentCreateRequestLine](../models/api-inflation-adjustment-create-request-line.md)[] | :heavy_check_mark:                                                                                            | N/A                                                                                                           |