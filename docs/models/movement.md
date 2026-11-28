# Movement

## Example Usage

```typescript
import { Movement } from "lapyme/models";

let value: Movement = {
  movementId: "f6f3b526-b67e-427d-ad51-bd83b8aaab6e",
  warehouseId: "7790e266-18d3-4ade-b721-b4c6e50308ad",
  occurredAt: new Date("2024-03-08T23:03:56.306Z"),
  quantity: 7705.44,
  type: "<value>",
  sourceOrganizationName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `movementId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurredAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unitCost`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sourceOrganizationName`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |