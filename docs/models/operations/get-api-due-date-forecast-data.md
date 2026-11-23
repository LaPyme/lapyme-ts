# GetApiDueDateForecastData

## Example Usage

```typescript
import { GetApiDueDateForecastData } from "lapyme/models/operations";

let value: GetApiDueDateForecastData = {
  object: "due_date_forecast",
  referenceDate: new Date("2025-04-09"),
  balanceAsOfDate: new Date("2025-05-27"),
  functionalCurrency: "ARS",
  periods: [],
  groups: {
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
  },
  upcomingCash: {
    inflows: 739634,
    outflows: 89408,
    net: 820841,
    itemCount: 328577,
    unvaluedCheckCount: 118589,
  },
  aging: {
    payables: 119607,
    receivables: 892064,
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `object`                                                                                              | [operations.GetApiDueDateForecastObject](../../models/operations/get-api-due-date-forecast-object.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `referenceDate`                                                                                       | [Date](../../types/rfcdate.md)                                                                        | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `balanceAsOfDate`                                                                                     | [Date](../../types/rfcdate.md)                                                                        | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `functionalCurrency`                                                                                  | [operations.FunctionalCurrency](../../models/operations/functional-currency.md)                       | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `periods`                                                                                             | [operations.Period](../../models/operations/period.md)[]                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `groups`                                                                                              | [operations.Groups](../../models/operations/groups.md)                                                | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `upcomingCash`                                                                                        | [models.ApiSharedObject2ebcc69a3d](../../models/api-shared-object2ebcc69a3d.md)                       | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `aging`                                                                                               | [operations.Aging](../../models/operations/aging.md)                                                  | :heavy_check_mark:                                                                                    | N/A                                                                                                   |