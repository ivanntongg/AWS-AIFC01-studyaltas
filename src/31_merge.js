/* Merge two copies of a learner's progress (this device vs the synced copy).
   Each copy is {data: {key: value}, ts: {key: lastChangedMs}}. Pure function, no side effects. */
window.SDMerge = (function(){
  var UNION = ['done', 'plan', 'seen', 'known'];      // lists that only grow: keep everything from both
  var MAXNUM = ['best', 'bestSim'];                   // personal bests: keep the higher
  function uniq(a){ var o = [], seen = {}; a.forEach(function(x){ var k = JSON.stringify(x); if (!seen[k]) { seen[k] = 1; o.push(x); } }); return o; }
  function newer(k, a, b){
    var ta = (a.ts || {})[k] || 0, tb = (b.ts || {})[k] || 0;
    if (!(k in b.data)) return a.data[k];
    if (!(k in a.data)) return b.data[k];
    return tb > ta ? b.data[k] : a.data[k];
  }
  function mergeSrs(x, y){
    var out = {}, k;
    x = x || {}; y = y || {};
    for (k in x) out[k] = x[k];
    for (k in y) {
      var a = out[k], b = y[k];
      if (!a || b.b > a.b || (b.b === a.b && b.due > a.due)) out[k] = b;
    }
    return out;
  }
  function mergeHist(x, y){
    var byT = {};
    (x || []).concat(y || []).forEach(function(r){ if (r && r.t != null) byT[r.t] = r; });
    return Object.keys(byT).map(function(t){ return byT[t]; }).sort(function(a, b){ return a.t - b.t; }).slice(-60);
  }
  function mergeStats(x, y){
    var out = {}, k;
    x = x || {}; y = y || {};
    for (k in x) out[k] = x[k];
    for (k in y) if (!out[k] || (y[k][1] || 0) > (out[k][1] || 0)) out[k] = y[k];
    return out;
  }
  function merge(local, remote){
    local = local || {data: {}, ts: {}}; remote = remote || {data: {}, ts: {}};
    local.data = local.data || {}; remote.data = remote.data || {}; local.ts = local.ts || {}; remote.ts = remote.ts || {};
    var keys = {}, data = {}, ts = {}, k;
    for (k in local.data) keys[k] = 1;
    for (k in remote.data) keys[k] = 1;
    for (k in keys) {
      var a = local.data[k], b = remote.data[k], has = (k in local.data) && (k in remote.data);
      if (!has) data[k] = (k in local.data) ? a : b;
      else if (UNION.indexOf(k) >= 0) data[k] = uniq((a || []).concat(b || []));
      else if (MAXNUM.indexOf(k) >= 0) data[k] = (a == null) ? b : (b == null ? a : Math.max(a, b));
      else if (k === 'srs') data[k] = mergeSrs(a, b);
      else if (k === 'hist') data[k] = mergeHist(a, b);
      else if (k === 'stats') data[k] = mergeStats(a, b);
      else data[k] = newer(k, local, remote);
      ts[k] = Math.max(local.ts[k] || 0, remote.ts[k] || 0);
    }
    return {data: data, ts: ts};
  }
  return {merge: merge};
})();
