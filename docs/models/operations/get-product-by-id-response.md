# GetProductByIdResponse

## Example Usage

```typescript
import { GetProductByIdResponse } from "lapyme/models/operations";

let value: GetProductByIdResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      id: "4c084bd4-d467-4a72-a598-afb72ee1f2a9",
      name: "<value>",
      description: "deployment breakable yowza duh against supposing whenever",
      category: {
        id: "9417009b-878c-4f27-a13b-c1c94d6de727",
        name: "<value>",
      },
      sku: "<value>",
      barcode: "<value>",
      oemCode: "<value>",
      currency: "Boliviano boliviano",
      cost: 9608.66,
      price: 4046.45,
      taxRate: {
        id: 9265.07,
        value: 4163.34,
      },
      stockMinimum: 3698.8,
      defaultSupplier: {
        id: "0ab8abd6-c0e8-47ad-abcd-fd359bc3a9e5",
        name: "<value>",
      },
      productType: "service",
      isActive: false,
      organizationSlug: "<value>",
      createdAt: new Date("2025-10-24T04:18:50.738Z"),
      updatedAt: new Date("2024-04-04T02:18:48.800Z"),
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `result`                                                                    | [models.GetProductByIdResponse](../../models/get-product-by-id-response.md) | :heavy_check_mark:                                                          | N/A                                                                         |