# ListApiDueDateForecastItemsData

## Example Usage

```typescript
import { ListApiDueDateForecastItemsData } from "lapyme/models/operations";

let value: ListApiDueDateForecastItemsData = {
  object: "due_date_forecast_item",
  sourceType: "<value>",
  sourceId: "5a87a377-06e9-479a-8a44-6dcc77ddd61c",
  journalLineId: "a6bb520b-825f-47e1-bfd6-ff60040e11fa",
  installmentPosition: 769684,
  contactId: "ad01e91d-0412-4589-aaf6-0c938e5106dc",
  contactName: "<value>",
  reference: "<value>",
  dueDate: new Date("2025-07-02"),
  functionalAmount: 922472,
  nativeAmount: 441979,
  nativeCurrency: "<value>",
  href: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                           | [operations.ListApiDueDateForecastItemsObject](../../models/operations/list-api-due-date-forecast-items-object.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sourceType`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sourceId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `journalLineId`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `installmentPosition`                                                                                              | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `contactId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `contactName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `reference`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `dueDate`                                                                                                          | [Date](../../types/rfcdate.md)                                                                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `functionalAmount`                                                                                                 | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Centavos de ARS con signo de flujo. Nulo si falta la cotización de un cheque.                                      |
| `nativeAmount`                                                                                                     | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `nativeCurrency`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `href`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |