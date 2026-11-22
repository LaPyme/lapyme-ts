# ListApiDueDateForecastItemsResponseBody

Detalle de vencimientos obtenido

## Example Usage

```typescript
import { ListApiDueDateForecastItemsResponseBody } from "lapyme/models/operations";

let value: ListApiDueDateForecastItemsResponseBody = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "8abec0cb-e3f6-4226-94ca-2340e2f84285",
    circuitName: "<value>",
  },
  data: [
    {
      object: "due_date_forecast_item",
      sourceType: "<value>",
      sourceId: "ece5330c-c259-470e-92b4-721d9a86b13e",
      journalLineId: "d8b1a91a-afbc-4dd0-a549-b20fa73bafb9",
      installmentPosition: 966740,
      contactId: "1743f7f4-4626-4275-a502-02cffd277d68",
      contactName: "<value>",
      reference: "<value>",
      dueDate: new Date("2024-09-12"),
      functionalAmount: 540753,
      nativeAmount: 873341,
      nativeCurrency: "<value>",
      href: "<value>",
    },
  ],
  object: "list",
  url: "https://physical-sightseeing.info",
  hasMore: true,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `effectiveScope`                                                                                                 | *operations.ListApiDueDateForecastItemsEffectiveScope*                                                           | :heavy_check_mark:                                                                                               | Circuito sobre el que corrió el reporte: `all`, o el circuito pedido (`circuit_id` null es General).             |
| `data`                                                                                                           | [operations.ListApiDueDateForecastItemsData](../../models/operations/list-api-due-date-forecast-items-data.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `object`                                                                                                         | [models.ApiSharedEnume0cf0306aa](../../models/api-shared-enume0cf0306aa.md)                                      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `url`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `hasMore`                                                                                                        | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nextCursor`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |