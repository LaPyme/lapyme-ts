# ApiPriceListPricesListResponseData


## Supported Types

### `models.ApiSharedObjectb990586284`

```typescript
const value: models.ApiSharedObjectb990586284 = {
  object: "price_list_price",
  priceListId: "e37cd5b0-2ab1-4f0e-8dd1-3c97974373ec",
  productId: "cc06d18e-1600-41a7-ad4c-b0915b3894ce",
  currency: "ARS",
  taxInclusive: true,
  taxRate: {
    id: 269798,
    value: 6838.53,
  },
  isExempt: false,
  calculation: {
    origin: "product_rule",
    type: "component_sum",
    sourcePriceListId: "4b2da195-e5d6-460f-9e6a-7385ad56b4ac",
  },
  status: "priced",
  unitPrice: 331282,
};
```

### `models.ApiSharedObjectcc3aec15bc`

```typescript
const value: models.ApiSharedObjectcc3aec15bc = {
  object: "price_list_price",
  priceListId: "d7d2f2bf-192d-4dda-a054-8c1f080465ba",
  productId: "aba67ec4-82da-4876-907a-5daefb5e16a3",
  currency: "ARS",
  taxInclusive: false,
  taxRate: {
    id: 269798,
    value: 6838.53,
  },
  isExempt: true,
  calculation: {
    origin: "product_rule",
    type: "component_sum",
    sourcePriceListId: "4b2da195-e5d6-460f-9e6a-7385ad56b4ac",
  },
  status: "unavailable",
  unitPrice: "<value>",
  unavailableReason: "pricing_input_unavailable",
};
```

