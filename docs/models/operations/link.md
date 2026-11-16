# Link

## Example Usage

```typescript
import { Link } from "lapyme/models/operations";

let value: Link = {
  action: "link",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `action`                                                         | *"link"*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `targets`                                                        | *operations.TargetUnion*[]                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `adjustments`                                                    | [operations.Adjustment](../../models/operations/adjustment.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `reason`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |