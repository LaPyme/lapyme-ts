# Movement

## Example Usage

```typescript
import { Movement } from "lapyme/models/operations";

let value: Movement = {
  action: "movement",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `action`                                                   | *"movement"*                                               | :heavy_check_mark:                                         | N/A                                                        |
| `accountId`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `contactId`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `costCenter1Id`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `costCenter2Id`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `costCenter3Id`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `note`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `reason`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `remember`                                                 | [operations.Remember](../../models/operations/remember.md) | :heavy_minus_sign:                                         | N/A                                                        |