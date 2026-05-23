# Metadata

## Example Usage

```typescript
import { Metadata } from "lapyme/models";

let value: Metadata = {
  source: "purchases",
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
| `source`                                                                             | [models.SourceEnum](../models/source-enum.md)                                        | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `dimensions`                                                                         | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `measures`                                                                           | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `period`                                                                             | [models.ReportQueryResponsePeriod](../models/report-query-response-period.md)        | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `dateBasis`                                                                          | [models.ReportQueryResponseDateBasis](../models/report-query-response-date-basis.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |