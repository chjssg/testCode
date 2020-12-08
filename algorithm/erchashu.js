/**
 *
 * node格式：
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


 /**
 *  递归前序遍历
 */
 var root = {
     val: 1,
     left: null,
     right: {
         val: 2,
         left: 3,
         right: null
     }
 };
// function preorderTraversal(root) {
//     if (root === null) {
//         return
//     }
//     console.log(root.value);
//     preorderTraversal(root.left);
//     preorderTraversal(root.right);
// }

function preorderTraversal(root) {
    if (root === null) {
        return
    }
    let stack = [];
    while (root != null || stack.length > 0) {
        while (root != null) {
            console.log(root.value);
            root = root.left;
            stack.push(root.right);
        }
        root = stack.pop();
    }
}


var postorderTraversal = function(root) {
    if (root == null) return [];
    let result = [];
    let stack = [];
    let lastVisit = undefined
    console.log(123)
    while(root !== null || stack.length > 0) {
        while(root !== null) {
            stack.push(root)
            root = root.left
        }
        let node = stack[stack.length - 1];
        console.log(node);
        if (node.right == null || node.right === lastVisit) {
            stack.pop();
            console.log(node);
            result.push(node.val);
            // 标记当前这个节点已经弹出过
            lastVisit = node
        } else {
            root = node.right
        }
    }
    console.log(result);
    return result
};


/**
 * BFS层级遍历*/
function levelOrder(root) {
    // 通过上一层的长度确定下一层的元素
    let result = [];
    if (root === null) {
        return result
    }
    let queue = [root];
    while (queue.length > 0) {
        let list = [];
        // 为什么要取length？
        // 记录当前层有多少元素（遍历当前层，再添加下一层）
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            // 出队列
            let level = queue.shift();
            list.push(level.val);
            if (level.left !== null) {
                queue.push(level.left)
            }
            if (level.right !== null) {
                queue.push(level.right)
            }
        }
        result.push(list)
    }
    return result
}

/**
 * 快排*/
function quickSort(arr, start, end) {
    if (start >= end) return;
    let standard = start;
    for (let i = start; i <= end; i++) {
        if (arr[i] < arr[standard]) {
            let temp = arr[i];
            arr[i] = arr[standard];
            arr[standard] = temp;
            standard++
        }
    }
    quickSort(arr, start, standard - 1);
    quickSort(arr, standard + 1, end);
}
function test(arr) {
    quickSort(arr, 0, arr.length - 1)
    console.log(arr)
}
test([8, 7, 16, 5, 6, 8, 100, 9]);
/**
 * 归并排序
 * 分治法的应用*/
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = parseInt(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // 合并两段数据
    let result = merge(left, right);
    console.log(result);
    return result
}
function merge(left, right) {
    // 两边数组合并游标
    let l = 0;
    let r = 0;
    // 注意不能越界
    let result = [];
    while (l < left.length && r < right.length) {
        // 谁小合并谁
        if (left[l] > right[r]) {
            result.push(right[r]);
            r++
        } else {
            result.push(left[l]);
            l++
        }
    }
    // 剩余部分合并
    result.push(...left.slice(l));
    result.push(...right.slice(r));
    return result
}

// mergeSort([32,12,56,78,76,45,36]);