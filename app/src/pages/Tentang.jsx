import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/yoursky12/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section class="kotak-tentang">
      <h1>Tentang Saya</h1>
      <dl>
        <dt>Nama</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}