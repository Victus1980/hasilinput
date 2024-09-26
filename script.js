let saldoAwal = Number(prompt("masukan saldo awal anda!"));
let saldoTambahan = Number(prompt("masukan saldo tambahan anda!"));
const totalSaldo = saldoAwal + saldoTambahan;

alert(`jadi nilai saldo anda adalah sebesar Rp.${totalSaldo}`);
document.writeln("<pre>");
document.writeln(`saldo awal anda adalah Rp.${saldoAwal},
dan saldo tambahan anda adalah sebesar Rp.${saldoTambahan}. 
jadi, total saldo anda adalah sebesar Rp.${totalSaldo}`);
document.writeln("</pre>");
