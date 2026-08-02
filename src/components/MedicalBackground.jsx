'use client'

export default function MedicalBackground() {
  return (
    <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full -z-10 pointer-events-none select-none overflow-hidden bg-[#eaf1ee] m-0 p-0 border-0 outline-none">
      
      {/* هاله نوری سبز نعنایی/زمردی روشن در بالا-راست */}
      <div 
        className="absolute -top-40 -right-20 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full blur-[140px] opacity-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.22) 0%, rgba(167,243,208,0.12) 50%, rgba(255,255,255,0) 75%)'
        }}
      />

      {/* هاله نوری سبز-طوسی روشن در پایین-چپ */}
      <div 
        className="absolute -bottom-20 -left-20 w-[550px] h-[550px] sm:w-[800px] sm:h-[800px] rounded-full blur-[130px] opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(209,250,229,0.1) 55%, rgba(255,255,255,0) 75%)'
        }}
      />
    </div>
  )
}
