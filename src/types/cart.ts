import { ID, Money, LocalizedText, ImageAsset } from "./index"

export type CartItem = {
  id: string; // unique ID for the cart item (usually combination of productId + variants)
  productId: ID;
  name: LocalizedText;
  image?: ImageAsset;
  price: Money;
  quantity: number;
}
