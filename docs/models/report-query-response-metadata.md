# ReportQueryResponseMetadata

## Example Usage

```typescript
import { ReportQueryResponseMetadata } from "lapyme/models";

let value: ReportQueryResponseMetadata = {
  source: "inventory",
  dimensions: [],
  measures: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `source`                                                                             | [models.ApiSharedEnum07ee8fd91e](../models/api-shared-enum07ee8fd91e.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `dimensions`                                                                         | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `measures`                                                                           | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `period`                                                                             | [models.ReportQueryResponsePeriod](../models/report-query-response-period.md)        | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `dateBasis`                                                                          | [models.ReportQueryResponseDateBasis](../models/report-query-response-date-basis.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |