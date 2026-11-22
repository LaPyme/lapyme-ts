# Groups

## Example Usage

```typescript
import { Groups } from "lapyme/models/operations";

let value: Groups = {
  overdue: {
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
  },
  undated: {
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
  },
  afterPeriod: {
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
  },
  creditsAndAdvances: {
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
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `overdue`                                                                       | [models.ApiSharedObject4a9b5e1e3d](../../models/api-shared-object4a9b5e1e3d.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `undated`                                                                       | [models.ApiSharedObject4a9b5e1e3d](../../models/api-shared-object4a9b5e1e3d.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `afterPeriod`                                                                   | [models.ApiSharedObject4a9b5e1e3d](../../models/api-shared-object4a9b5e1e3d.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `creditsAndAdvances`                                                            | [models.ApiSharedObject4a9b5e1e3d](../../models/api-shared-object4a9b5e1e3d.md) | :heavy_check_mark:                                                              | N/A                                                                             |