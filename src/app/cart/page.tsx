import { authOptions } from "@/lib/authOptions"
import { getUserCartItems } from "@/lib/products.actions"
import { getServerSession } from "next-auth"

const CartPage = async () => {

  const session = await getServerSession(authOptions)
  //@ts-ignore
  const cartItems = await getUserCartItems(session?.user?.id)
  return (
    <section>
      {cartItems.map((item: any) => (
        <p>{item.name}</p>
      ))
      }
    </section >
  )
}

export default CartPage
