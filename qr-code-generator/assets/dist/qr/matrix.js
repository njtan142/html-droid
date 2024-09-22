import{evaluate_matrix}from"./qr.js";import{alignment_pattern,alignment_pattern_location_table,ec_bits_table,finder_pattern,format_information_table,mask_pattern,version_information_binary}from"./qr_table.js";export class Module{x;y;value;location;constructor(t,i,e,r){this.x=t,this.y=i,this.value=e,this.location=r}black(t){this.check_location(t),this.value=1,this.location=t}white(t){this.check_location(t),this.value=0,this.location=t}set(t,i){this.check_location(i),this.value=t,this.location=i}check_location(t){if(this.location!==t&&void 0!==this.location)throw new Error(`Attempting to override ${this.location} with ${t} at (${this.x}, ${this.y})`)}copy(){return new Module(this.x,this.y,this.value,this.location)}}export class Matrix{size;version;grid;mask;ec_level;format_info;constructor(t,i){this.version=t,this.size=4*t+17,this.ec_level=i,this.mask=0,this.format_info=0,this.grid=Array.from(Array(this.size),((t,i)=>Array.from(Array(this.size),((t,e)=>new Module(e,i,0))))),this.reserve_format_information(),this.draw_dark_module(),this.draw_finder_patterns(),this.draw_timing_patterns(),this.draw_alignment_pattern(),this.draw_version_information()}reserve_format_information(){const t=this.size-1,i=this.grid;for(let t=0;t<=8;t++)6!==t&&(i[8][t].white("format"),i[t][8].white("format"));for(let e=0;e<8;e++)i[8][t-e].white("format"),i[t-e][8].white("format")}draw_dark_module(){const t=this.grid,i=4*this.version+9;t[i][8].location="dark",t[i][8].black("dark")}draw_finder_patterns(){const t=this.size,i=this.grid,e=t-1,r=t-7,o=t-8;for(let t=0;t<finder_pattern.length;t++)for(let e=0;e<finder_pattern.length;e++)i[t][e].set(finder_pattern[t][e],"finder"),i[t][r+e].set(finder_pattern[t][e],"finder"),i[r+t][e].set(finder_pattern[t][e],"finder");for(let t=0;t<8;t++)i[7][t].white("finder"),i[t][7].white("finder"),i[7][o+t].white("finder"),i[t][o].white("finder"),i[e-t][7].white("finder"),i[o][t].white("finder")}draw_timing_patterns(){const t=this.grid;let i=1;for(let e=8;e<t.length-8;e++)t[e][6].set(i,"timing"),t[6][e].set(i,"timing"),i=1===i?0:1}draw_alignment_pattern(){const t=this.grid,i=this.version,e=alignment_pattern_location_table[i];for(let i=0;i<e.length;i++)t:for(let r=0;r<e.length;r++){const o=e[r]-2,n=e[i]-2;for(let i=o;i<o+5;i++)for(let e=n;e<n+5;e++)if("finder"===t[e][i].location)continue t;for(let i=0;i<5;i++)for(let e=0;e<5;e++)"timing"===t[n+i][o+e].location&&(t[n+i][o+e].location="alignment"),t[n+i][o+e].set(alignment_pattern[i][e],"alignment")}}draw_version_information(){const t=this.version;if(t<7)return;const i=this.size,e=version_information_binary[t],r=this.grid;for(let t=0;t<6;t++)for(let o=0;o<3;o++)r[i-11+o][t].set(e[3*t+o],"version"),r[t][i-11+o].set(e[3*t+o],"version")}insert_codewords(t,i=(()=>!1)){const e=this.grid.map((t=>t.map((t=>t.copy())))),r=this.size;let o=0,n=!1;for(let a=e.length-1;a>=0;a-=2){"timing"==e[9][a].location&&(a-=1),n=!n;const s=n?0:r-1,l=n?-1:1,h=t=>n?t>=s:t<=s;for(let s=n?r-1:0;h(s)&&o>=0;s+=l){if(void 0===e[s][a].location){const r=i(s,a)?1^t[o++]:t[o++];e[s][a].set(r,"data")}if(o===t.length)break;if(!(a-1<0)){if(void 0===e[s][a-1].location){const r=i(s,a-1)?1^t[o++]:t[o++];e[s][a-1].set(r,"data")}if(o===t.length)break}}}if(o!==t.length)throw new Error("Not all codewords were inserted");return e}add_format_information(t,i){const e=this.ec_level,r=this.size-1,o=ec_bits_table[e]<<3|i,n=format_information_table[o].slice().reverse();let a=0;for(let i=0;i<9;i++)6!==i&&t[i][8].set(n[a++],"format");for(let i=7;i>=0;i--)6!==i&&t[8][i].set(n[a++],"format");a=0;for(let i=0;i<8;i++)t[8][r-i].set(n[a++],"format");for(let i=0;i<7;i++)t[r-i][8].set(n[a++],"format")}add_data(t){let i=this.insert_codewords(t,mask_pattern[0]);this.add_format_information(i,0);let e=evaluate_matrix(i),r=0;for(let o=1;o<8;o++){const n=this.insert_codewords(t,mask_pattern[o]);this.add_format_information(n,o);const a=evaluate_matrix(n);a<e&&(e=a,i=n,r=o)}this.grid=i,this.mask=r}}