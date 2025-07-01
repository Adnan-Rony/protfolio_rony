import { MagicCard } from "../../components/magicui/magic-card" // adjust the path as needed

const isDarkMode = true // or replace with your own theme toggle logic
export const Test2 = () => {
  
  return (
    <div>
     <MagicCard
  gradientColor="#262626"
  gradientFrom="#9E7AFF"
  gradientTo="#FE8BBB"
  className="rounded-xl"
>
  <div className="relative p-6 bg-black rounded-xl">
    <h3 className="text-xl font-bold mb-2 text-white">Hello World</h3>
    <p className="text-white/70">Hover me to see the magic effect</p>
  </div>
</MagicCard>
    </div>
  )
}
