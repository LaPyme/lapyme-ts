# GetApiDueDateForecastResponseBody

Pronóstico obtenido

## Example Usage

```typescript
import { GetApiDueDateForecastResponseBody } from "lapyme/models/operations";

let value: GetApiDueDateForecastResponseBody = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "8abec0cb-e3f6-4226-94ca-2340e2f84285",
    circuitName: "<value>",
  },
  data: {
    object: "due_date_forecast",
    referenceDate: new Date("2025-03-26"),
    balanceAsOfDate: new Date("2025-11-04"),
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
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `effectiveScope`                                                                                     | *operations.GetApiDueDateForecastEffectiveScope*                                                     | :heavy_check_mark:                                                                                   | Circuito sobre el que corrió el reporte: `all`, o el circuito pedido (`circuit_id` null es General). |
| `data`                                                                                               | [operations.GetApiDueDateForecastData](../../models/operations/get-api-due-date-forecast-data.md)    | :heavy_check_mark:                                                                                   | N/A                                                                                                  |