public class KthSmallestElementInArray {

  public int find (int[] A, int k) {

    PriorityQueue<Integer> pq = new PriorityQueue<Integer>();

    for (int i = 0 ; i < A.length ; i++) {
      pq.offer(A[i]);
    }

    int n = -1;

    while (k > 0) {
      pq.poll();
      k--;
    }

    return n;

  }

}