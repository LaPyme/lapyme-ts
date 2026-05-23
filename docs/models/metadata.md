# Metadata

## Example Usage

```typescript
import { Metadata } from "lapyme/models";

let value: Metadata = {
  source: "payments",
  dimensions: [
    "<value 1>",
  ],
  measures: [
    "<value 1>",
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