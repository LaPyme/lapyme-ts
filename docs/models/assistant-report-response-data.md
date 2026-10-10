# AssistantReportResponseData

## Example Usage

```typescript
import { AssistantReportResponseData } from "lapyme/models";

let value: AssistantReportResponseData = {
  summary: "<value>",
  report: {},
  chart: {},
  reporting: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `summary`              | *string*               | :heavy_check_mark:     | N/A                    |
| `report`               | Record<string, *any*>  | :heavy_check_mark:     | N/A                    |
| `chart`                | Record<string, *any*>  | :heavy_check_mark:     | N/A                    |
| `reporting`            | Record<string, *any*>  | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |