# ApiOrganizationResponse

## Example Usage

```typescript
import { ApiOrganizationResponse } from "lapyme/models";

let value: ApiOrganizationResponse = {
  requestId: "<id>",
  data: {
    object: "organization",
    id: "298d17cd-b5cb-406a-ba5c-5f9fc4a1314f",
    name: "<value>",
    slug: "<value>",
    legalName: "<value>",
    logoUrl: "https://submissive-harp.net",
    taxId: "<id>",
    taxIdType: "<value>",
    taxCategory: "<value>",
    personType: "<value>",
    address: "22753 N 9th Street",
    apartment: null,
    city: "Allen",
    provinceId: "<id>",
    postalCode: "79412",
    country: "United States of America",
    phone: null,
    email: "Thad_Abbott72@hotmail.com",
    roundingPreference: "<value>",
    defaultCurrency: "ARS",
    timezone: "UTC-3",
    createdAt: new Date("2026-04-19T21:18:53.733Z"),
    updatedAt: new Date("2026-05-03T10:06:24.902Z"),
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `requestId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `data`                                                                            | [models.ApiOrganizationResponseData](../models/api-organization-response-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |