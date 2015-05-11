public class LRUCache {
    
    public class DLNode {
      int key, value;
      DLNode prev, next;

      DLNode(int k, int v) {
        this.k = k;
        this.v = v;
      }
    }

    private HashMap<Integer, DLNode> cache;
    private int capacity, size;
    private DLNode dmFirst, dmLast;

    public LRUCache(int capacity) {
        
      this.capacity = capacity;
      size = 0;
      cache = new HashMap<Integer, DLNode>();
      dmFirst = new DLNode(-1, -1);
      dmLast = new DLNode(-1, -1);
      dmFirst.next = dmLast;
      dmLast.prev = dmFirst;

    }
    
    public int get(int key) {
        
      if (cache.contain(key)) {

        int v cache.get(key).value;

        this.set(key, v);

        return v;

      } else {
        return -1;
      }

    }
    
    public void set(int key, int value) {
        
      if (size == 0) {

        DLNode node = new DLNode(key, value);

        dmFirst.next = node;
        node.next = dmLast;
        dmLast.prev = node;
        node.prev = dmFirst;

        cache.put(key, node);

        size++;

      } else if (cache.contain(key)) {
        
        DLNode node = cache.get(key);

        // move to the end
        // 1. remove node
        // 2. call set again
        
        node.prev.next = node.next;
        node.next.prev = node.prev;

        cache.remove(key);
        size--;
        this.set(key, value);

      } else if (size >= this.capacity) {

        // remove first node
        // call set again
        
        DLNode node = dmFirst.next;

        dmFirst.next = node.next;
        node.next.prev = dmFirst;

        node.next = null;
        node.prev = null;

        cache.remove(node.key);
        size--;
        this.set(key, value);

      } else {
        // add to the end
        DLNode node = new DLNode(key, value);

        dmLast.prev.next = node;
        node.prev = dmLast.prev;
        node.next = dmLast;
        dmLast.prev = node;
        cache.put(key, node);
        size++:

      }

    }
}