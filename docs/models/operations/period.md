# Period

## Example Usage

```typescript
import { Period } from "lapyme/models/operations";

let value: Period = {
  key: "<key>",
  rows: {
    payables: {
      inflows: 430703,
      outflows: 141910,
      net: 645466,
      itemCount: 694682,
      unvaluedCheckCount: 6917,
    },
    receivables: {
      inflows: 807252,
      outflows: 871515,
      net: 988016,
      itemCount: 229864,
      unvaluedCheckCount: 978460,
    },
    issuedChecks: {
      inflows: 458931,
      outflows: 288456,
      net: 946041,
      itemCount: 797045,
      unvaluedCheckCount: 232561,
    },
    receivedChecks: {
      inflows: 357593,
      outflows: 49538,
      net: 483110,
      itemCount: 691365,
      unvaluedCheckCount: 278032,
    },
  },
  totals: {
    inflows: 775950,
    outflows: 375809,
    net: 878509,
    itemCount: 289270,
    unvaluedCheckCount: 767761,
  },
  startDate: new Date("2026-06-08"),
  endDateExclusive: new Date("2024-10-25"),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `key`                                                                           | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `rows`                                                                          | [models.ApiSharedObjectbe95c9a3e4](../../models/api-shared-objectbe95c9a3e4.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `totals`                                                                        | [models.ApiSharedObject2ebcc69a3d](../../models/api-shared-object2ebcc69a3d.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `startDate`                                                                     | [Date](../../types/rfcdate.md)                                                  | :heavy_check_mark:                                                              | N/A                                                                             |
| `endDateExclusive`                                                              | [Date](../../types/rfcdate.md)                                                  | :heavy_check_mark:                                                              | N/A                                                                             |