import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size
  return (
    <section>
      <h1>Welcome To Jurnal Latihan Olahraga </h1>
      <div >
        <p>Tema: {mahasiswa.tema}</p>
        {loading ? (
          <p>Memuat ringkasan...</p>
        ) : (
          <p>
            Ada {items.length} tugas dalam {jumlahKategori} kategori.
          </p>
        )}
      </div>
      <Link id="buttonTugas" to="/koleksi">Lihat semua tugas</Link>
    </section>
  )
}