(function (g) {
  const KEY = "edumost-lesson-progress";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function key(subject, topicId) {
    return subject + "/" + topicId;
  }

  function get(subject, topicId) {
    const all = load();
    const cur = all[key(subject, topicId)];
    if (cur && Array.isArray(cur.visited)) return cur;
    return { index: 0, visited: [0], tasks: {} };
  }

  function put(subject, topicId, state) {
    const all = load();
    all[key(subject, topicId)] = state;
    save(all);
  }

  function visit(subject, topicId, index) {
    const state = get(subject, topicId);
    if (state.visited.indexOf(index) < 0) state.visited.push(index);
    state.index = index;
    put(subject, topicId, state);
    return state;
  }

  function recordTask(subject, topicId, taskId, result) {
    const state = get(subject, topicId);
    state.tasks = state.tasks || {};
    state.tasks[taskId] = { ok: !!result.ok, at: Date.now() };
    put(subject, topicId, state);
    return state;
  }

  g.EduMostProgress = { get: get, visit: visit, recordTask: recordTask };
})(window);
