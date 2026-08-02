'use client'

export default function MedicalBackground() {
  return (
    <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full -z-10 pointer-events-none select-none overflow-hidden bg-[#f8f4ed] m-0 p-0 border-0 outline-none">
      
      {/* هاله نوری بژ/عسلی خیلی ملایم در بالا-راست (کمی روشن‌تر از هدر) */}
      <div 
        className="absolute -top-40 -right-20 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full blur-[140px] opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235,220,200,0.45) 0%, rgba(245,237,226,0.2) 50%, rgba(255,255,255,0) 75%)'
        }}
      />

      {/* هاله نوری کرمی گرم در پایین-چپ */}
      <div 
        className="absolute -bottom-20 -left-20 w-[550px] h-[550px] sm:w-[800px] sm:h-[800px] rounded-full blur-[130px] opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(228,210,186,0.35) 0%, rgba(248,244,237,0.15) 55%, rgba(255,255,255,0) 75%)'
        }}
      />
    </div>
  )
}
